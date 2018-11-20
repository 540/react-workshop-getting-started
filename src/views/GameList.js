import React, { Component } from "react";

const isSearched = searchTerm => game => (
  game.name.toLowerCase().includes(searchTerm.toLowerCase())
);

export default class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      isLoading: false,
      searchTerm: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  getGames = async () => {
    const gamesData = await fetch(
      "http://www.mocky.io/v2/5bf3f9dd3100006500619ac3?mocky-delay=2000ms"
    );
    const games = await gamesData.json();

    return games.games;
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const games = await this.getGames();

    this.setState({ games: games, isLoading: false });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  createGameRow = (game, index) => (
    <tr key={game.id}>
      <th scope="row">{index + 1}</th>
      <td>{game.id}</td>
      <td>{game.name}</td>
    </tr>
  );

  render() {
    return (
      <div>
        <h1>Juegos clásicos</h1>
        <div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-3" >
                <label htmlFor="searchTermInput">Filtro</label>
                <input type="text" className="form-control" id="searchTermInput" aria-describedby="emailHelp"
                       placeholder="Filtrar por..." onChange={this.onSearchChange} />
              </div>
            </div>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              this.state.games
                .filter(isSearched(this.state.searchTerm))
                .map(this.createGameRow, this)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const Loading = () => <div>Loading ...</div>;

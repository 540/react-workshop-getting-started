import React, { Component } from "react";

export default class GameList extends Component {
  render() {
    return (
      <div>
        <h1>Juegos clásicos</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>metal-gear-solid</td>
              <td>Metal Gear Solid</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>gran-turismo</td>
              <td>Gran Turismo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>pro-evolution-soccer</td>
              <td>Pro Evolution Soccer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

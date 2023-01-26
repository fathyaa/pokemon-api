import React from "react";
import Table from "react-bootstrap/Table";

const PokemonDetail = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h5 className="mt-3 mb-4">Pokemon Detail</h5>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
            width={150}
          />

          <Table bordered variant="dark" className="mt-4">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  <h5>{data.name}</h5>
                </td>
              </tr>
              <tr>
                <th>Types</th>
                <td>
                  {data.types.map((type) => (
                    <div>
                      <span>{type.type.name}</span>
                    </div>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Moves</th>
                <td>
                  {data.moves.map((move) => (
                    <>{move.move.name} </>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default PokemonDetail;

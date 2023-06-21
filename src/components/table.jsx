import Table from 'react-bootstrap/Table';

function Tabela() {
  return (
    <div data-bs-theme="dark" className="tabelas">
    <Table  striped bordered hover>

        <thead>
          <tr>
            <th>Ano</th>
            <th>Vítimas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2015</td>
            <td>41</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>63</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>121</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>136</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>184</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>180</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>140</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>195</td>
          </tr>
        </tbody>

    </Table>

    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cor</th>
            <th>Vítimas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Outros</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Amarela</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Ignorada</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Preta</td>
            <td>71</td>
          </tr>
          <tr>
            <td>Parda</td>
            <td>371</td>
          </tr>
          <tr>
            <td>Branca</td>
            <td>606</td>
          </tr>
        </tbody>

    </Table>

    <Table striped bordered hover>

        <thead>
          <tr>
            <th>Município</th>
            <th>Vítimas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>São Paulo</td>
            <td>232</td>
          </tr>
          <tr>
            <td>Campinas</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Guarulhos</td>
            <td>28</td>
          </tr>
          <tr>
            <td>Osasco</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Sorocaba</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Ribeirão Preto</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Bauru</td>
            <td>13</td>
          </tr>
          <tr>
            <td>Santo André</td>
            <td>12</td>
          </tr>
          <tr>
            <td>São Bernardo do Campo</td>
            <td>12</td>
          </tr>
          <tr>
            <td>São José dos Campos</td>
            <td>12</td>
          </tr>
        </tbody>

    </Table>
  </div>
    



    
  );
}

export default Tabela;
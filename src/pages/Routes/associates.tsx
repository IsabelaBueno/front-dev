import { AssociatesContainer } from "../../styles/Routes/Associates.styles";
import { MagnifyingGlass, ArrowRight } from "phosphor-react";

export default function Associates() {
  return (
    <AssociatesContainer>
      <div className="superior">
        <div className="cabeçario">
          <h1> ASSOCIATES</h1>
          <span>Last updated by Mapfre Mapfre on 09/03/2022 09:23 AM</span>
        </div>
        <label>
          <MagnifyingGlass size={20} color="#B9B9B9" />
          <input type="text" placeholder="Search for associates..." />
          <ArrowRight size={20} color="#B9B9B9" />
        </label>
      </div>

      <div className="tabela">
        <table>
          <tr>
            <th>S.No</th>
            <th className="title"> Title </th>
            <th>Office</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Willian </td>
            <td>Supervisor</td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Giba </td>
            <td>Project manager/ Itau</td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gedson </td>
            <td>Project manager</td>
            <td>
              <div className="inactive"> INACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Giovanni </td>
            <td>Project manager</td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Francisco </td>
            <td> CEO </td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Isabela </td>
            <td> Project manager </td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Leonardo </td>
            <td> Project manager </td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Andre </td>
            <td> Project manager </td>
            <td>
              <div className="active">ACTIVE</div>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td> Matheus </td>
            <td> Project manager </td>
            <td>
              {" "}
              <div className="active">ACTIVE</div>
            </td>
          </tr>
        </table>
      </div>
    </AssociatesContainer>
  );
}

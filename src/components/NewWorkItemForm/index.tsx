import { ArrowSquareDown, Paperclip } from "phosphor-react";
import { NewWorkItemContainer } from "./styles";

export function NewWorkItemForm() {
  return (
    <NewWorkItemContainer>
      <h1>NEW WORKITEM</h1>
      <form action="">
        <div className="formsLeft">
          <label>
            Title*
            <input type="text" placeholder="Enter the title" />
          </label>
          <label>
            Description
            <textarea name="" id="" rows={10} />
          </label>
          <label className="uploadFile">
            Attachments
            <input type="file" name="" id="" />
            <div>
              <Paperclip size={20} />
              <span>Upload File</span>
            </div>
          </label>
          <label>
            Linkedin open position URL
            <input
              type="text"
              placeholder="Enter Linkedin open position URL (Link)"
            />
          </label>
          <label>
            Project / Squad / Team Name
            <input
              type="text"
              placeholder="Enter Project / Squad / Team Name"
            />
          </label>
          <label>
            Work Location
            <input type="text" placeholder="Enter Work Location" />
          </label>
        </div>
        <div className="formsRight">
          <label>
            <span>Title*</span>
            <select name="title" id="title">
              <option value="1">Select</option>
              <option value="2">.NET</option>
              <option value="3">ReactJS</option>
              <option value="4">Angular</option>
              <option value="5">Java</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Status*</span>
            <select name="title" id="title">
              <option value="0">Select</option>
              <option value="1">Open Position</option>
              <option value="2">Closed Position</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Owner</span>
            <select name="title" id="title">
              <option value="0">Select</option>
              <option value="1">Giba</option>
              <option value="2">Willian</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Priority*</span>
            <select name="title" id="title">
              <option value="0">Select</option>
              <option value="1">Urgent</option>
              <option value="2">Normal</option>
              <option value="3">Low</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Seniority Required*</span>
            <select name="title" id="title">
              <option value="0">Select</option>
              <option value="1">Urgent</option>
              <option value="2">Normal</option>
              <option value="3">Low</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Minimum Experience Years*</span>
            <input type="text" />
          </label>
          <label>
            <span>Customer</span>
            <input type="text" />
          </label>
          <label>
            <span>New Position or replace</span>
            <input type="text" />
          </label>
          <label>
            <span>RGS</span>
            <input type="text" />
          </label>
          <label>
            <span>CP</span>
            <input type="text" />
          </label>
          <div className="formButtons">
            <button>CANCEL</button>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </NewWorkItemContainer>
  );
}

import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import "reactflow/dist/style.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Papa from "papaparse"; //For csv file read

// import AutoFlow from "reactflow";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// let initialNodes = [];
// let initialEdges = [];

const ReactFlow = () => {
  // const [value, setValue] = React.useState(null)
  // const handleChange = (newValue) => {
  //   setValue(newValue)
  // }
  const dimensionHandler = (event) => {
    console.log(event.target.files[0]); //For taking csv file 
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data); //For read the csv file data
      }
    });
  };

  return (
    <>
      <div>
        <ButtonGroup>
          <Button
           component="label"
          >
            <FileUploadOutlinedIcon /> Dimension File
            <input
              type="file"
              name="dimension"
              accept=".csv"
              onChange={dimensionHandler}
              hidden
            />
          </Button>
        </ButtonGroup>
      </div>
      {/* <div style={{ width: "100vw", height: "80vh" }}>
        <AutoFlow
          nodes={initialNodes}
          edges={initialEdges}></AutoFlow>
      </div> */}
    </>
  );
};

export default ReactFlow;

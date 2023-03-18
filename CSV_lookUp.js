//FILEPATH
const csvFilePath = "C:/Users/omark/AppData/Roaming/JetBrains/WebStorm2022.3/scratches/Data_list.csv/";

//PACKAGES
import csv from 'csvtojson';

//READING THE CSV FILE
export function read_cvs(pipe_mat, pipe_size, pipe_WT) {
    csv()
        .fromFile(csvFilePath)
        .then((data) => {
            const df = data;

            const pipe_material = prompt("Input Pipe Material: ");
            const nominal_pipe_size = prompt("Input Nominal Pipe Size: ");
            const pipe_type = prompt("Input Pipe Type: ");

            const located_row_df = df.filter((row) => {
                return row["Pipe Material"] === pipe_mat && row["Nominal Pipe Size"] === pipe_size && row["Pipe Type"] === pipe_WT;
            });
            located_row_df.index = Array.from({length: located_row_df.length}, (_, i) => i);

            const row = located_row_df[0];
            console.log(row);

            // OUTPUT VARIABLES
            const Carrier_OD = located_row_df[0]["Pipe OD"];
            const Carrier_WT = located_row_df[0]["Pipe Wall Thickness"];
            const Carrier_ID = located_row_df[0]["Pipe ID"];
            const Carrier_Bell_OD = located_row_df[0]["Bell OD"];
            const Carrier_Pipe_Weight = located_row_df[0]["Pipe Weight"];


            document.getElementById("Carrier_OD").innerHTML = Carrier_OD;
            document.getElementById("Carrier_WT").innerHTML = Carrier_WT;
            document.getElementById("Carrier_ID").innerHTML = Carrier_ID;
            document.getElementById("Carrier_Bell_OD").innerHTML = Carrier_Bell_OD;
            document.getElementById("Carrier_Pipe_Weight").innerHTML = Carrier_Pipe_Weight;
        });
}

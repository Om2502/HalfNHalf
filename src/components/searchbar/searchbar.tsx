import { Container } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
interface TravelPrefType {
    inputValue?: string;
    name: string;
}
// here's where our tags are
const travelPreferences: readonly TravelPrefType[] = [{ name: "beaches" }];
// this is where we loop over each tag and do something with it
function handleInputs(input: TravelPrefType[]) {
    for (let i of input) {
        console.log(i);
    }
}
function SearchBar() {
    return (
        <Container>
            <Autocomplete
                multiple
                id="travelPreferenceTags"
                options={travelPreferences}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => handleInputs(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Travel Preferences"
                        placeholder="Whatd'ya like?"
                    />
                )}
                sx={{ width: "xl" }}
            />
        </Container>
    );
}
export default SearchBar;

import { Container } from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
interface TravelPrefType {
    inputValue?: string;
    name: string;
}
// here's where our tags are
const travelPreferences: readonly TravelPrefType[] = [
    { name: "beaches" },
    { name: "hotels" },
    { name: "flights" },
    { name: "airline tickets" },
    { name: "vacation" },
    { name: "trip" },
    { name: "destination" },
    { name: "beaches" },
    { name: "restraunts" },
    { name: "vacation" },
    { name: "trip" },
    { name: "bars" },
    { name: "casinos" },
    { name: "beach resort" },
    { name: "national park" },
    { name: "downtown" },
    { name: "adventure sports destination" },
    { name: "cultural and historical destination" },
    { name: "ski resort" },
    { name: "spa and wellness retreat" },
    { name: "food and wine destination" },
    { name: "cruise" },
    { name: "ecotourism destination" },
    { name: "hospital" },
    { name: "car rental" },
    { name: "museum" },
    { name: "clubs" },
    { name: "alcohol" },
    { name: "arcade" },
    { name: "nightclub" },
    { name: "hiking" },
    { name: "hiking trail" },
    { name: "boardwalk" },
    { name: "parks" },
    { name: "disney" },
    { name: "skiing" },
    { name: "ski resort" },
    { name: "surfing" },
    { name: "expensive" },
    { name: "kayak" },
    { name: "sports" },
    { name: "music festival" },
    { name: "food festival" },
    { name: "art show" },
    { name: "film festival" },
    { name: "carnival" },
    { name: "state fair" },
    { name: "festival" },
    { name: "magic show" },
    { name: "circus" },
    { name: "comedy" },
    { name: "amusement park" },
    { name: "parade" },
    { name: "fireworks" },
    { name: "concert" },
    { name: "escape room" },
    { name: "brunch" },
    { name: "dinner" },
    { name: "lake" },
    { name: "ocean" },
    { name: "sky diving" },
];
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

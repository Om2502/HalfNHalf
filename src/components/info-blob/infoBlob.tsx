import { Typography } from "@mui/material";
import { Container } from "@mui/system";
function InfoBlob() {
    return (
        <Container>
            <div>
                <Typography
                    variant="h5"
                    component="a"
                    sx={{
                        mr: 1,
                        display: { xs: "flex", md: "flex" },
                        flexGrow: 1,
                        fontWeight: 200,
                        letterSpacing: ".1rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    This is the info blob that tells you what the next button is
                    for
                </Typography>
            </div>
        </Container>
    );
}
export default InfoBlob;

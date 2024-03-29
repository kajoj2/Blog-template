import React from "react"
import MainLayout from "../Layout/main";

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}


const AboutPage = () => {
    return (
        <MainLayout>
            <main style={pageStyles}>
                <title>Work in progress</title>
                <h1 style={headingStyles}>Work in progress</h1>
                <p style={paragraphStyles}>
                    Sorry{" "}
                    <span role="img" aria-label="Pensive emoji">
                      😔
                    </span>{" "}
                    Here will be awesome page but not now
                    <br/>
                    <br/>
                    If you want to contact with me send me email karol@furwers.com
                </p>
            </main>
        </MainLayout>
    )
}

export default AboutPage

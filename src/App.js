import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/layout";
import Header from "./components/header";
import FormMain from "./components/formMain";
import Results from "./components/results";

const App = () => {
  const [data, setData] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout header={<Header />}>
        <>
        <FormMain setData={setData} />
        {data && <Results data={data} />}
        </>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

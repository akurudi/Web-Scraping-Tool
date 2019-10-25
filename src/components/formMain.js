import React, { useState } from "react";
import PaperCustom from "./paperCustom";
import FormTextInput from "./formTextInput";
import FormSwitch from "./formSwitch";
import FormButton from "./formButton";

export default () => {
  const [url, setURL] = useState("");
  const [features, setFeatures] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    const postData = {url, ...features}
    fetch("/api/getall/", {
      method: 'POST',
      cache: 'force-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
      const {scripts} = data;
      console.log(JSON.stringify(scripts))
    })
  };
  return (
    <PaperCustom background="main" paperElevation={20}>
      <form onSubmit={handleSubmit}>
        <PaperCustom background="dark" paperElevation={10}>
          <FormTextInput handleURLChange={setURL} value={url} />
        </PaperCustom>
        <PaperCustom background="dark" paperElevation={10}>
          <FormSwitch handleFeatureChange={setFeatures} />
        </PaperCustom>
        <FormButton />
      </form>
    </PaperCustom>
  );
};

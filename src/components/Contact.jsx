import React from "react";

const Contact = () => {
  return (
    <div>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
            <label>First className <br />
                <input type="text" name="first-name" />
            </label>
        </div>
        <div>
            <label>Email</label> <br />
            <input type="email" />
        </div>
        <button type="submit">Submit the Results</button>
      </form>
    </div>
  );
};

export default Contact;

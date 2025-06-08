import { HtmlElement } from "./htmlElement.js";

// ++++++++++++++++++
// ==Start Template==
// ++++++++++++++++++
let sectionPrompts = [
  { legend: "" },
  {
    // title
    question: "", // this will be .name by default
    name: "", // if necessary
    label: "", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
];
// ====++++Select and radio options go in appended options +++++++++++================
let selectOptions = [
  "", //first option is the select placeholder
  "",
  "",
  "",
  "", //options name
];

let radioOptions = [
  "",
  "",
  "", //options name
];
// let title = "some form title";
// let theForm = {
//   method: "POST",
//   action: "/",
//   noValidate: true, // true or false
//   styleSheet: "./forms/css-sheets/test.css",
//   font: "",
//   title: title,
//   id: title.replace(/ /g, "-"), //replace spaces with dashes
//   description: "",
// sectionArray: sections,
// submitMessage: "Submitting. . . Please Wait 🙂",
// submitError: "*Please check fields",
// ,sectionArray: sectionsArray
// ,sectionArray: sectionsArray
// };
// ++++++++++++++++
// ==End Template==
// ++++++++++++++++

export function populateForm(formObject, targetElement) {
  if (formObject.styleSheet !== "") {
    let newStyleSheet = new HtmlElement(
      "link",
      document.querySelector("head"),
      {
        rel: "stylesheet",
        href: formObject.styleSheet,
      }
    );
  }
  if (formObject.font !== "") {
    let newStyleSheet = new HtmlElement(
      "link",
      document.querySelector("head"),
      {
        rel: "stylesheet",
        href: formObject.font,
      }
    );
  }
  let formWrapper = new HtmlElement("div", targetElement, {
    class: "form-wrapper",
  });
  let form = new HtmlElement("form", formWrapper.element, {
    id: formObject.id,
    method: formObject.method,
    action: formObject.action,
  });
  if (formObject.noValidate === true) {
    form.addProperties(form.element, { novalidate: true });
  }
  let formTitle = new HtmlElement(
    "h2",
    form.element,
    { class: "form-title" },
    formObject.title
  );
  let formDescription = new HtmlElement(
    "p",
    form.element,
    {},
    formObject.description
  );
  // populateSections(formObject.sectionArray, form.element)
  populateSections(formObject, form.element);
  populateSubmit(formObject, form.element);
}
function populateSubmit(formObject, parentElement) {
  let submitWrapper = new HtmlElement("div", parentElement, {
    class: "submit-wrapper",
  });

  let submitButton = new HtmlElement(
    "button",
    submitWrapper.element,
    { id: "submit-button" },
    "Submit"
  );

  let submitMessageSpan = new HtmlElement("span", submitWrapper.element, {
    class: "submit-message",
  });
  submitButton.element.addEventListener("click", (e) => {
    switch (validateForm(formObject.id)) {
      case true:
        submitMessageSpan.element.textContent = formObject.submitMessage;
        submitButton.element.style.visibility = "hidden";
        // window.history.back();
        break;
      default:
        // e.preventDefault();
        // window.history.back();
        submitMessageSpan.element.textContent = formObject.submitError;
        break;
    }
  });
}
export function populateInputs(inputObject, parentElement) {
  let theName =
    inputObject.name !== "" ? inputObject.name : inputObject.question;
  if (inputObject.label !== "") {
    let label = new HtmlElement(
      "label",
      parentElement,
      { for: theName },
      inputObject.label
    );
  }
  switch (inputObject.type) {
    case "textarea":
      let textArea = new HtmlElement("textarea", parentElement, {
        name: theName,
        label: inputObject.label,
        placeholder: inputObject.placeholder,
      });
      if (inputObject.required) {
        textArea.element.setAttribute("required", true);
      }
      break;
    case "hidden":
      let hidden = new HtmlElement("input", parentElement, {
        type: 'hidden',
        name: theName,
        label: inputObject.label,
        value: inputObject.placeholder,
      });
      if (inputObject.required) {
        hidden.element.setAttribute("required", true);
      }
      break;
    case "select":
      let newSelect = new HtmlElement("select", parentElement, {
        name: theName,
        id: `select-${theName}`,
        label: inputObject.label,
        placeholder: inputObject.placeholder,
      });
      if (inputObject.required) {
        newSelect.element.setAttribute("required", true);
      }
      // let newOption = new HtmlElement('option', newSelect.element, {}, 'blablah')
      inputObject.appendedOptions.forEach((option) => {
        let newOption = new HtmlElement(
          "option",
          newSelect.element,
          { value: option },
          option
        );
      });
      break;
    case "radio":
      let newRadioLabel = new HtmlElement("label", parentElement, {}, theName);
      let newRadio = new HtmlElement("div", parentElement, {
        name: theName,
        label: inputObject.label,
        placeholder: inputObject.placeholder,
        class: inputObject.class,
      });

      inputObject.appendedOptions.forEach((option) => {
        let newRadioDiv = new HtmlElement("div", newRadio.element);
        switch (option) {
          case "other":
            let newOtherOption = new HtmlElement("input", newRadioDiv.element, {
              type: "radio",
              name: theName,
              value: "other",
            });
            let newUserOption = new HtmlElement("input", newRadioDiv.element, {
              type: "text",
              placeholder: "other",
            });
            newUserOption.element.addEventListener("change", () => {
              newUserOption.element.value === ""
                ? (newOtherOption.element.value = "other")
                : (newOtherOption.element.value = newUserOption.element.value);
            });
            break;
          default:
            let newRadioOption = new HtmlElement(
              "input",
              newRadioDiv.element,
              {
                type: "radio",
                id: `option ${theName} ${option}`,
                name: theName,
                value: option,
              },
              option
            );
            if (inputObject.required) {
              newRadioOption.element.setAttribute("required", true);
            }
            let newRadioLabel = new HtmlElement(
              "label",
              newRadioDiv.element,
              { for: newRadioOption.element.id },
              option
            );
            break;
        }
      });
      break;
      case 'checkbox':
      let newCheckboxLabel = new HtmlElement(
        "label",
        parentElement,
        {},
        theName
      );
      let newCheckbox = new HtmlElement("div", parentElement, {
        name: theName,
        label: inputObject.label,
        placeholder: inputObject.placeholder,
      });
      inputObject.appendedOptions.forEach((option) => {
        let newCheckboxDiv = new HtmlElement("div", newCheckbox.element);
        let newCheckboxOption = new HtmlElement(
          "input",
          newCheckboxDiv.element,
          {
            type: "checkbox",
            id: `option ${theName} ${option}`,
            name: theName,
            value: option,
          },
          option
        );
        if (inputObject.required) {
          newCheckboxOption.element.setAttribute("required", true);
        }
        let newCheckboxLabel = new HtmlElement(
          "label",
          newCheckboxDiv.element,
          { for: newCheckboxOption.element.id },
          option
        );
      });

      break;
    default:
      let newInput = new HtmlElement("input", parentElement, {
        name: inputObject.name !== "" ? inputObject.name : inputObject.question,
        type: inputObject.type,
        label: inputObject.label,
        placeholder: inputObject.placeholder,
      });
      if (inputObject.required) {
        newInput.element.setAttribute("required", true);
      }
      break;
  }

  // console.log(theName);
}
export function populateSections(formObject, parentElement) {
  let sectionArray = formObject.sectionArray;
  sectionArray.forEach((sec) => {
    let newSection = new HtmlElement("fieldset", parentElement, {
        id: sec[0].legend.replace(/ /g, "-"),
      }),
      newLegend = new HtmlElement(
        "legend",
        newSection.element,
        {},
        sec[0].legend
      );
    sec.slice(1).forEach((obj) => {
      populateInputs(obj, newSection.element);
    });
  });
}
function validateForm(formID) {
  let requiredArray = Array.from(
    document.getElementById(formID).querySelectorAll("[required = true]")
  );
  let counter = 0;
  requiredArray.forEach((element) => {
    if (element.checkValidity()) {
      counter++;
    }
  });
  switch (counter) {
    case requiredArray.length:
      return true;
      break;
    default:
      return false;
      break;
  }
}

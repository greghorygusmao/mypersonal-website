import {
  AuthForm,
  ValidatedForm,
  create,
  create2,
  withYup
} from "/build/_shared/chunk-MU6UMJOE.js";
import "/build/_shared/chunk-GR7NI54K.js";
import {
  Box_default
} from "/build/_shared/chunk-BDVPY5N2.js";
import "/build/_shared/chunk-LPLRIGGC.js";
import "/build/_shared/chunk-BKCMAYM7.js";
import "/build/_shared/chunk-5KJDWWOR.js";
import "/build/_shared/chunk-54BVP5TW.js";
import "/build/_shared/chunk-LE4DRNHO.js";
import {
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-FUDEBXLW.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-FDP6WGZF.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/logar.jsx?browser
init_react();

// app/routes/logar.jsx
init_react();
function links() {
  return [...AuthForm.links];
}
var validator = withYup(create2({
  email: create().nullable().email("Email Incorreto").required("Campo obrigat\xF3rio"),
  password: create().nullable().required("Campo obrigat\xF3rio")
}));
function CatchBoundary() {
  let caught = useCatch();
  console.log(caught);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "We couldn't find that page!"));
}
function Index() {
  const { defaultValues } = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    flex: 1,
    style: {
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(ValidatedForm, {
    validator,
    method: "post",
    defaultValues,
    style: {
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(AuthForm, {
    defaultValues
  })));
}
export {
  CatchBoundary,
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/logar-DHWHKGHK.js.map

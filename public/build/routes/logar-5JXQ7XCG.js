import {
  AuthForm,
  ValidatedForm,
  create,
  create2,
  withYup
} from "/build/_shared/chunk-HNZLNVY3.js";
import "/build/_shared/chunk-I3A7VGLC.js";
import {
  Box_default
} from "/build/_shared/chunk-XB6GIIDF.js";
import "/build/_shared/chunk-GBCRI72L.js";
import "/build/_shared/chunk-XTDSILFO.js";
import "/build/_shared/chunk-ABZMIAM7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-VSGSUTFO.js";
import "/build/_shared/chunk-KH4E7I3U.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

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
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/logar-5JXQ7XCG.js.map

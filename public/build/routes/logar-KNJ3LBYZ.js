import {
  AuthForm,
  ValidatedForm,
  create,
  create2,
  withYup
} from "/build/_shared/chunk-Z7ZIJFS4.js";
import "/build/_shared/chunk-6KYJXVDI.js";
import "/build/_shared/chunk-PJKC6RK3.js";
import {
  Box_default
} from "/build/_shared/chunk-IAWH4BSB.js";
import "/build/_shared/chunk-57DB2D4I.js";
import "/build/_shared/chunk-JLSAAXSH.js";
import "/build/_shared/chunk-YREIJD63.js";
import "/build/_shared/chunk-MMF35QCH.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RVY3MJSE.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-FVSE6P6F.js";

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
//# sourceMappingURL=/build/routes/logar-KNJ3LBYZ.js.map

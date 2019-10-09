const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.post("/oauth/token/", (req, res) =>
  res.send({
    access_token:
      "eyJhbGciOiJIUzUxMiIsImtpZCI6IjNlZWI5ZmY0MzRmYTk2NTBlNDYwMTdhNTVhZmNkZjk0ZjEzZDRiZjBiZjcwMzk1NGRmN2M2MDRiOTdkOWMyYWUifQ.eyJqdGkiOiIwNmM1YTIwMi00MWQ3LTQ2YzYtYjk5MC01M2U4OGUwZGY4NzgiLCJpZCI6IjE3YTgyNWE0LWZjZTQtNDRiNS1hOGVjLThjZDdjOTU4ZDQxNyIsImVtYWlsIjoiZGlnaXRhbC5kZXZlbG9wZXJAcmFkaW9hZnJpY2Fncm91cC5jby5rZSIsInRpbWVzdGFtcCI6IjIwMTktMTAtMDhUMTY6MTU6NTIuOTg2KzAwOjAwIiwidXNlcm5hbWUiOiJkaWdpdGFsLmRldmVsb3BlckByYWRpb2FmcmljYWdyb3VwLmNvLmtlIiwic3VybmFtZSI6IlRlc3QiLCJmaXJzdF9uYW1lIjoiQXV0aCIsIm90aGVyX25hbWUiOiJBdXRoIFRlc3QiLCJ1dWlkIjoiMTdhODI1YTQtZmNlNC00NGI1LWE4ZWMtOGNkN2M5NThkNDE3Iiwic3RhdGUiOjEsIm1vYmlsZV9udW1iZXIiOm51bGx9.5IUPz6URxEPCpae8DE37QUJ1DphZFk5qgPE4EvRMCacw86nUwatKBtg-e1YLEQF7pI2vO2A57rkbBNhYjo0KIw",
    token_type: "bearer",
    expires_in: 86400,
    refresh_token:
      "9e0a36cc22c0b66b097a6f489e77727eb9b0d433f00ebe3d9366a9210328f0fe",
    created_at: 1570551352,
    user: {
      id: "17a825a4-fce4-44b5-a8ec-8cd7c958d417",
      email: "digital.developer@radioafricagroup.co.ke",
      created_at: "2019-10-01T03:59:50.933Z",
      updated_at: "2019-10-07T07:39:23.425Z",
      name: "Auth Test",
      first_name: "Auth",
      surname: "Test",
      username: null,
      phone_number: null,
      gender: null,
      date_of_birth: null,
      registration_at: null,
      active: null,
      other_name: null,
      phone_serial_number: null,
      city: null,
      country: null,
      billing_approval: 0,
      billing_approval_date: null,
      roles: ["admin"]
    }
  })
);

app.listen(port, () => console.log(`I'm listening on port ${port}!`));

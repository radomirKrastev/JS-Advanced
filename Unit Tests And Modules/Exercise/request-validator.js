function validateRequest(obj) {
  let objProperties = Object.getOwnPropertyNames(obj);

  const validatePropertiesCount = (function() {
    let requiredProperties = ["method", "uri", "version", "message"];

    for (let i = 0; i < requiredProperties.length; i++) {
      if (objProperties[i] !== requiredProperties[i]) {
        throw new Error(
          requiredProperties[i] === "uri"
            ? "Invalid request header: Invalid URI"
            : `Invalid request header: Invalid ${requiredProperties[i]
                .charAt(0)
                .toUpperCase()}${requiredProperties[i].slice(1)}`
        );
      }
    }
  })();

  const validateMethod = (function() {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    if (!validMethods.includes(obj.method)) {
      throw new Error(`Invalid request header: Invalid Method`);
    }
  })();

  const validateUri = (function() {
    if (!obj.uri.match(/^[a-zA-Z0-9.]+$|^\*$/)) {
      throw new Error(`Invalid request header: Invalid URI`);
    }
  })();

  const validateVersion = (function() {
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!validVersions.includes(obj.version)) {
      throw new Error(`Invalid request header: Invalid Version`);
    }
  })();

  const validateMessage = (function() {
    if (!obj.message.match(/^$|^[^<>\\&'"]+$/)) {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  })();

  return obj;
}

// console.log(
//   validateRequest({
//     method: "GET",
//     uri: "svn.public.catalog",
//     version: "HTTP/1.1",
//     message: ""
//   })
// );

// console.log(
//   validateRequest({
//     method: "OPTIONS",
//     uri: "git.master",
//     version: "HTTP/1.1",
//     message: "-recursive"
//   })
// );

// console.log(
//   validateRequest({
//     method: "POST",
//     uri: "home.bash",
//     message: "rm -rf /*"
//   })
// );

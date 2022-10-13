.then(response => {
    if (response.ok) {
      response.json().then (onLogin)
    }else {
      response.json().then (console.log)
    }})
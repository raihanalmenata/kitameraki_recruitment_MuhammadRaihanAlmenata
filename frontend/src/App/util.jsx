const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const formValues  = Object.fromEntries(form.entries());
  
    const reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }
  
    const response = await fetch('http://localhost:3000/task',reqData)
    const json = await response.json()
  
    console.log(json);
}

export { handleSubmit }
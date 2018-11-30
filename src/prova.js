const funzioneAsincrona = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Errore')), 2000)
    })
  } catch (e) {
    console.log('Inside the catch block')
    console.error(e)
  }
}

funzioneAsincrona()

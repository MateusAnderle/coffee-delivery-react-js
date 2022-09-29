export function useLocalStorage() {
    function saveToLocalStorage(data, key) {
      if (!data) return
  
      const dataJSON = JSON.stringify(data)
  
      localStorage.setItem(key, dataJSON)
    }
  
    function loadLocalStorage(key) {
      const dataJSON = localStorage.getItem(key)
  
      if (!dataJSON) return
  
      const data = JSON.parse(dataJSON)
  
      return data
    }
  
    return { saveToLocalStorage, loadLocalStorage }
  }
  
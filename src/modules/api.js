import { gameURL } from "./definition.js";

class Api {
    add(prop) {
        this.prop = prop;
    
        fetch(gameURL, {
          method: 'POST',
          body: JSON.stringify(this.prop),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json());
      }
}

export default Api;
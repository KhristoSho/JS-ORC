export function orderByProps(object, listProp=[]) {
  let result = [];
  let properties = [];

  for (const prop in object) {
    if (!listProp.includes(prop)) {
      properties.push(prop);
    }
  }
  properties = [...listProp, ...properties.sort()];
  
  for (const prop of properties) {
    result.push(
      {key: prop, value:object[prop]}
    );
  }
  return result;
}

export function showAttacks({ special }) {
  return special.map(
    ({id, name,  description = "Описание недоступно", icon}) => ({
      id, name, description, icon
    })
  );
}

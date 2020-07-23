export const FindFrame = (arr, name) => {
  if (arr && arr.length > 0 && name) {
    let current = arr.filter((item) => item.name === name)
    if (current[0]) {
      return {
        ...current[0],
      }
    } else return { canEdit: true }
  } else return { canEdit: true }
}

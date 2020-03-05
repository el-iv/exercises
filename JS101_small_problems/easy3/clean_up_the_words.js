function cleanUp(str) {
  return str.replace(/[^a-z0-9]/g, " ").replace(/  +/g, ' ');;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

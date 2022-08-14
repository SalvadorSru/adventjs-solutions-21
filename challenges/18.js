export default function fixFiles(files, counts = {}) {

  return files.map(n => {
      counts[n] = (counts[n] || 0) + 1;
      return n += counts[n] == 1 ? '' : `(${counts[n] - 1})` 
  })
  
}
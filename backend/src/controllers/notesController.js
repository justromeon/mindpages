export function getAllNotes(req, res) {
  res.send('your note')
}

export function createNote(req, res) {
  res.status(201).json({message: "note created successfully"})
}

export function updateNote(req, res) {
  res.json({message: "note updated successfully"})
}

export function deleteNote(req, res) {
  res.json({message: "note deleted successfully"})
}

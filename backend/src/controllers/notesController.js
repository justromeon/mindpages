import Note from '../models/Notes.js'

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  
  } catch (error) {
    console.error('Error in getAllNotes controller', error)
    res.status(500).json({message: 'Internal server error'})
  }
}

export async function createNote(req, res) {
  try {
    const {title, content} = req.body
    const newNote = new Note({title, content})
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  
  } catch (error) {
    console.error('Error in createNote controller', error)
    res.status(500).json({message: 'Internal server error'})
  }
}

export async function updateNote(req, res) {
  try {
    const {title, content} = req.body
    const modifiedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
    modifiedNote === null
      ? res.status(404).json({message: 'Note does not exist'})
      : res.status(200).json(modifiedNote) 
  
  } catch (error) {
    console.error('Error in updateNote controller', error)
    res.status(500).json({message: 'Internal server error'})
  }
}

export async function deleteNote(req, res) {
  try {
    const removedNote = await Note.findByIdAndDelete(req.params.id)
    removedNote === null
      ? res.status(404).json({message: 'Note does not exist'})
      : res.status(200).json(removedNote)

  } catch (error) {
    console.error('Error in deleteNote controller', error)
    res.status(500).json({message: 'Internal server error'})
  }
}

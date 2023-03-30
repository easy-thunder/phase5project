

class ImageUploader < Shrine
    # plugins and uploading logic 
    Attacher.validate do
        validate_max_size 1.megabyte, message: "is too large (max is 1 MB)"
        validate_mime_type_inclusion ['image/jpg', 'image/jpeg', 'image/png']
      end
  end
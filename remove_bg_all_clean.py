import os
import re
from rembg import remove
from PIL import Image, UnidentifiedImageError
from io import BytesIO

# Folders
input_folder = "images"          # Original images
output_folder = "images_no_bg"   # Background-removed + white-backed images
os.makedirs(output_folder, exist_ok=True)

# Helper: clean filenames
def clean_filename(name):
    # Replace spaces with underscores, remove multiple dots
    name = name.replace(" ", "_")
    name = re.sub(r"\.(?=[^.]*\.)", "_", name)  # Replace all dots except last one
    return name

# Process images
for file_name in os.listdir(input_folder):
    if file_name.lower().endswith((".jpg", ".jpeg", ".png")):
        old_path = os.path.join(input_folder, file_name)
        clean_name = clean_filename(file_name)
        new_path = os.path.join(input_folder, clean_name)

        # Rename if needed
        if old_path != new_path:
            os.rename(old_path, new_path)
            print(f"🔹 Renamed: {file_name} → {clean_name}")

        output_path = os.path.join(output_folder, os.path.splitext(clean_name)[0] + ".png")

        try:
            with open(new_path, "rb") as f:
                input_data = f.read()
                output_data = remove(input_data)

            # Load output as image
            img = Image.open(BytesIO(output_data)).convert("RGBA")

            # Create white background
            background = Image.new("RGBA", img.size, (255, 255, 255, 255))
            background.paste(img, (0, 0), img)

            # Save final image
            background.save(output_path)
            print(f"✅ Processed: {clean_name} → {output_path}")

        except UnidentifiedImageError:
            print(f"⚠️ Skipped invalid image: {clean_name}")

print("\n🎉 All valid product images processed with white background! Check folder:", output_folder)


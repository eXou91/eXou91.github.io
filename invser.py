from PIL import Image

input_path = "assets/images/expertises/pouce.webp"
output_path = "assets/images/expertises/pouce_inverse.webp"

img = Image.open(input_path)
img_mirror = img.transpose(Image.FLIP_LEFT_RIGHT)
img_mirror.save(output_path, "WEBP")
import os

original_files = [
    "dej1a1.webp", "dej1a6.webp",
    "dej1b1.webp", "dej1b6.webp",
    "dej2a1.webp", "dej2a6.webp",
    "dej2b1.webp", "dej2b6.webp",
    "dej3a1.webp", "dej3a6.webp",
    "dej3b1.webp", "dej3b6.webp",
    "dej4a1.webp", "dej4a6.webp",
    "dej4b1.webp", "dej4b6.webp",
    "dej-slovnik1.webp", "dej-slovnik6.webp"
]

new_names = [
    "cimo-subory-d-1a-front.webp", "cimo-subory-d-1a-back.webp",
    "cimo-subory-d-1b-front.webp", "cimo-subory-d-1b-back.webp",
    "cimo-subory-d-2a-front.webp", "cimo-subory-d-2a-back.webp",
    "cimo-subory-d-2b-front.webp", "cimo-subory-d-2b-back.webp",
    "cimo-subory-d-3a-front.webp", "cimo-subory-d-3a-back.webp",
    "cimo-subory-d-3b-front.webp", "cimo-subory-d-3b-back.webp",
    "cimo-subory-d-4a-front.webp", "cimo-subory-d-4a-back.webp",
    "cimo-subory-d-4b-front.webp", "cimo-subory-d-4b-back.webp",
    "cimo-subory-d-slovnik-front.webp", "cimo-subory-d-slovnik-back.webp"
]

for old, new in zip(original_files, new_names):
    print(f"Renaming {old} -> {new}")
    os.rename(old, new)

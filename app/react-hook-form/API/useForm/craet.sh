#!/bin/bash

# Prompt the user to enter the directory names, separated by spaces
read -p "Enter directory names (separated by spaces): " -a dir_names

# Loop through the directory names and create a subdirectory for each
for dir_name in "${dir_names[@]}"
do
    mkdir "$dir_name"
    # Create an index.tsx file in each subdirectory and replace the placeholder with the directory name
    echo "import React from 'react'

const ${dir_name} = () => {
  return (
    <div>${dir_name}</div>
  )
}

export default ${dir_name}" > "$dir_name/index.tsx"
done

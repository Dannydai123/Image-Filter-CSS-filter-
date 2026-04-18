import { ChangeEvent } from "react";

export function FileInput({ ref: picRef }: any) {
  function handleUploadFile(
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ): void {
    const currFile = e.target.files?.[0];

    const imgUrl = URL.createObjectURL(currFile);
    console.log("Preview URL:", imgUrl);

    console.log(picRef.current);
    picRef.current.src = imgUrl;
  }

  return (
    <>
      <label
        className="text-heading mb-2.5 block text-xl font-medium"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full cursor-pointer border text-sm shadow-xs"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        accept="image/*"
        onChange={handleUploadFile}
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 1M).
      </p>
    </>
  );
}

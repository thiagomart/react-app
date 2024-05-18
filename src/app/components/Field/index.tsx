
interface propsField {
  title: string,
  required: boolean,
  messageError?: string,
  type: string
}


export function Field({title, required, messageError, type}: propsField) {
    return (
      <div className="mb-6">
        <div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
          <label htmlFor={title} className="block text-sm font-light leading-1">{title}</label>
        </div>
        <div className="w-full">
          <input type={type} id={title} className="w-full border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    );
  }
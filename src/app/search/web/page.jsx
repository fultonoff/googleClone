import WebSearchResults from "@/components/WebSearchResults"
import Link from "next/navigation"



async function WebSearchPage({searchParams}) {
  // await new Promise(r => setTimeout(r, 5000))
  
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  )

  if(!response){
    throw new Error('Something went wrong')
  }
  const data = await response.json()
  const results = data.items

  if(!results){
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Please try a different search term or go back to homepage

          <Link href={'/'} className='text-blue-500'>Home</Link>
        </p>
      </div>
    )
  }


  return (
    <>
  {results && <WebSearchResults results={data}/>}
    </>
  )
}

export default WebSearchPage
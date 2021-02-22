import Input from "./Input";
// import Input, { InputCard } from "./Input";


const MyHOC = () => {
  return (
    <>
      <Input type="text" label="Nhập tên" max={10} />
      <Input type="number" label="Nhập tuổi" max={20} />

      {/* <InputCard></InputCard> */}
    </>
  )
}

export default MyHOC

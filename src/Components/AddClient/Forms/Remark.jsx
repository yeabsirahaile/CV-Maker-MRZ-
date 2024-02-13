export default function Remark() {
  return (
    <div className="bg-blue-50 rounded-md container mx-auto  p-2 px-7 ">
      <label htmlFor="remark">Remarks</label>
      <textarea
        className="border-2 border-blue-200 rounded-md name="
        id="remark"
        cols="10"
        rows="3"
      ></textarea>
    </div>
  );
}

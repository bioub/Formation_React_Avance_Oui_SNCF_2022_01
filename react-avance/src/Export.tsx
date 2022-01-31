// import { utils } from 'xlsx/xlsx.esm.mjs';

function Export() {
  function handleClick() {
    import('xlsx/xlsx.esm.mjs').then(({utils}) => {
      const aoa: any[][] = [
        ['Sheet', 'JS'],
        ['Fuse', 'Box'],
        [72, 62],
      ];
      var wb = utils.book_new();
      var ws = utils.aoa_to_sheet(aoa);
      utils.book_append_sheet(wb, ws, 'Demo');
    })
  }

  

  return (
    <div className="Export">
      Export
      <button onClick={handleClick}>Export Excel</button>
    </div>
  );
}

export default Export;

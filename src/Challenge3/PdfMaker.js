// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import useMountEffect from '../commons/useMountEffect';

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfMaker = (props) => {
  useMountEffect(() => {
    pdfMake.createPdf(props.docDefinition).download('export-test.pdf', props.onCompleted);
  });
  return null;
};

PdfMaker.propTypes = {
  docDefinition: PropTypes.instanceOf(Object),
  onCompleted: PropTypes.func,
};

export default PdfMaker;

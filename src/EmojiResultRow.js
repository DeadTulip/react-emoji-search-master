import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {

    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    }
}

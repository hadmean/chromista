import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { ISharedFormInput } from "../_types";
import { wrapLabelAndError } from "../_wrapForm";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { USE_ROOT_COLOR } from "../../../AppWrapper/colors";

interface IFormCodeEditor extends ISharedFormInput {
  language?: "javascript";
}

const StyledWrapper = styled.div`
  border: 1px solid ${USE_ROOT_COLOR("border-color")};
  border-radius: 0.25rem;

  &:focus {
    border-color: ${USE_ROOT_COLOR("primary-color")};
    outline: 0;
  }

  pre {
    min-height: 50px;
  }

  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: #90a4ae;
  }

  .token.punctuation {
    color: #9e9e9e;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.boolean,
  .token.constant,
  .token.deleted,
  .token.number,
  .token.property,
  .token.symbol,
  .token.tag {
    color: #e91e63;
  }

  .token.attr-name,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
    color: #4caf50;
  }

  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.operator,
  .token.url {
    color: #795548;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #3f51b5;
  }

  .token.function {
    color: #f44336;
  }

  .token.important,
  .token.regex,
  .token.variable {
    color: #ff9800;
  }

  .token.bold,
  .token.important {
    font-weight: 700;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export const FormCodeEditor: React.FC<IFormCodeEditor> = (formInput) => {
  const {
    input: { onFocus, onBlur, ...inputProps },
  } = formInput;
  noop(onFocus, onBlur);
  return wrapLabelAndError(
    <StyledWrapper>
      <Editor
        {...inputProps}
        onValueChange={inputProps.onChange}
        highlight={(code) =>
          highlight(code, languages[formInput.language || "javascript"])
        }
        textareaId={formInput.input.name}
        padding={4}
        style={{
          height: "275px",
          fontFamily: '"Fira code", "Fira Mono", monospace',
        }}
      />
    </StyledWrapper>,
    formInput
  );
};

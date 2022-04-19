import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./Example.type";
import * as classes from "./Example.css";

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example">
      <p className={classes.txtStyle}>Example</p>
    </div>
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;

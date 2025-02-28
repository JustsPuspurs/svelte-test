import { describe, it, expect } from "vitest";
import BirthdayForm from "./BirthdayForm.svelte";
import {render} from   "@testing-library/svelte";

describe("BirthdayForm",()=>{
    it("has a form element", ()=>{
        render (BirthdayForm);
        expect(screen.queryByRole('from')).toBeVisible();
    });
    it("has a method of Post",()=> {
        render(BirthdayForm);
        expect(screen.queryByRole('from').getAttribute('method')).toBe('post');
    });
});
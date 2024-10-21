import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import LoginPage from "../Login.vue"; // Adjust the import path as necessary

describe("LoginPage.vue", () => {
  it("renders input fields and a submit button", () => {
    const wrapper = mount(LoginPage);
    const usernameInput = wrapper.find("input#username");
    expect(usernameInput.exists()).toBe(true);

    const passwordInput = wrapper.find("input#password");
    expect(passwordInput.exists()).toBe(true);

    const button = wrapper.find('button[type="submit"]');
    expect(button.exists()).toBe(true);
  });

  it("updates username and password data on input", async () => {
    const wrapper = mount(LoginPage);

    const usernameInput = wrapper.find("input.username-class");
    const passwordInput = wrapper.find("input#password");

    await usernameInput.setValue("testuser");
    await passwordInput.setValue("password123");

    expect(wrapper.vm.username).toBe("testuser");
    expect(wrapper.vm.password).toBe("password123");
  });

  it("calls handleLogin on form submission", async () => {
    const wrapper = mount(LoginPage);
    const handleLoginSpy = vi.spyOn(wrapper.vm, "handleLogin");

    await wrapper.find("input#username").setValue("testuser");
    await wrapper.find("input#password").setValue("password123");

    await wrapper.find("form").trigger("submit.prevent");

    expect(handleLoginSpy).toHaveBeenCalled();
  });
});

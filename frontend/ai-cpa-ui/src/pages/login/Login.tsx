import React, { useState } from "react";
import styles from "../../styles/login/Login.module.css";

const ILLUSTRATION_SRC = "/policy-assistant-3.png";

type FormState = {
  email: string;
  password: string;
  remember: boolean;
};

const Login: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";

    if (!form.password) next.password = "Password is required";
    else if (form.password.length < 6) next.password = "Password must be at least 6 characters";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 900));
      if (form.email.includes("fail")) {
        throw new Error("Invalid credentials");
      }

      window.location.href = "/dashboard";
    } catch (err: any) {
      setServerError(err.message || "Login failed");
      setLoading(false);
    }
  }

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((s) => ({ ...s, [key]: undefined }));
  }

  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Compliance & Policy AI Assistant</span>
          </div>
        </div>

        <div className={styles.illustrationWrap}>
          <img
            src={ILLUSTRATION_SRC}
            alt="Compliance illustration"
            className={styles.illustration}
          />
        </div>

        <div className={styles.leftFooter}>
          <p>Built for compliance teams • Secure • Enterprise-ready</p>
        </div>
      </aside>

      <main className={styles.right}>
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>

          {serverError && <div className={styles.serverError}>{serverError}</div>}

          <form onSubmit={onSubmit} className={styles.form}>
            <label className={styles.label}>
              Email address
              <input
                type="email"
                className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="you@company.com"
                required
              />
            </label>
            {errors.email && <div className={styles.fieldError}>{errors.email}</div>}

            <label className={styles.label}>
              Password
              <input
                type="password"
                className={`${styles.input} ${errors.password ? styles.invalid : ""}`}
                value={form.password}
                onChange={(e) => onChange("password", e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
            {errors.password && <div className={styles.fieldError}>{errors.password}</div>}

            <div className={styles.row}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => onChange("remember", e.target.checked)}
                />
                Remember me
              </label>

              <a className={styles.forgot} href="/forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.primaryBtn} disabled={loading}>
              {loading ? "Signing in…" : "Login"}
            </button>

            <div className={styles.divider}><span>or</span></div>

            <button type="button" className={styles.ghostBtn}>
              Continue with Google
            </button>

            <div className={styles.footLinks}>
              <span>
                Don’t have an account? <a href="/signup">Sign up</a>
              </span>
              <span>
                <a href="/terms">Privacy Policy</a> • <a href="/terms">Terms</a>
              </span>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;

const CHAPTERS = [
  {
    id: 1,
    title: "Tax-Advantaged Accounts 101",
    icon: "🎓",
    description: "What makes an account 'tax-advantaged' and why it matters for building wealth.",
    content: `
      <h2>🎓 Tax-Advantaged Accounts 101</h2>
      <p>Tax-advantaged accounts are special accounts that give you <strong>tax benefits</strong> when you save or invest. They're one of the most powerful tools for building wealth — and most people don't use them enough.</p>

      <div class="info-card">
        <h3>💡 Why Taxes Matter So Much</h3>
        <p>If you earn $100,000 and are in the 24% federal tax bracket, you lose <strong>$24,000</strong> to federal taxes alone (plus state taxes). Tax-advantaged accounts let you <strong>reduce</strong> what you owe, either now or in retirement.</p>
        <p>Over a 30-year career, maximizing these accounts could save you <strong>$100,000+ in taxes</strong>.</p>
      </div>

      <div class="info-card">
        <h3>🔀 The Three Tax Treatments</h3>
        <ul>
          <li><strong>Pre-Tax (Traditional):</strong> You contribute money <em>before</em> taxes. You pay taxes later when you withdraw in retirement. This lowers your taxable income <strong>today</strong>.</li>
          <li><strong>After-Tax (Roth):</strong> You contribute money <em>after</em> taxes. Your money grows tax-free and withdrawals in retirement are <strong>100% tax-free</strong>.</li>
          <li><strong>Tax-Free Growth:</strong> Some accounts (like HSAs) offer <em>both</em> — tax-deductible contributions AND tax-free withdrawals for qualified expenses.</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>📊 Pre-Tax vs. Roth: When to Use Each</h3>
        <ul>
          <li><strong>Use Pre-Tax if:</strong> You're in a high tax bracket now and expect to be in a lower one in retirement</li>
          <li><strong>Use Roth if:</strong> You're in a lower bracket now and expect higher taxes later (early career, tax rates may rise)</li>
          <li><strong>Use Both:</strong> Tax diversification gives you flexibility in retirement</li>
        </ul>
        <p>💡 <em>Many financial advisors recommend contributing to both pre-tax and Roth accounts for maximum flexibility.</em></p>
      </div>

      <div class="info-card">
        <h3>📅 2025 Overview of Key Accounts</h3>
        <table class="data-table">
          <tr><th>Account</th><th>Tax Treatment</th><th>2025 Limit</th></tr>
          <tr><td>401(k) Traditional</td><td>Pre-Tax</td><td>$23,500</td></tr>
          <tr><td>Roth 401(k)</td><td>After-Tax</td><td>$23,500</td></tr>
          <tr><td>IRA</td><td>Pre-Tax</td><td>$7,000</td></tr>
          <tr><td>Roth IRA</td><td>After-Tax</td><td>$7,000</td></tr>
          <tr><td>HSA (Individual)</td><td>Triple Tax-Free</td><td>$4,300</td></tr>
          <tr><td>FSA</td><td>Pre-Tax</td><td>$3,300</td></tr>
        </table>
        <p><em>Note: Contribution limits are updated annually by the IRS.</em></p>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>Tax-Deferred</dt><dd>You don't pay taxes now, but you pay when you withdraw the money later.</dd>
          <dt>Tax-Free Growth</dt><dd>Investment gains grow without being taxed (e.g., Roth accounts).</dd>
          <dt>Contribution Limit</dt><dd>The maximum amount you can put into a tax-advantaged account per year.</dd>
          <dt>Marginal Tax Rate</dt><dd>The tax rate on your last dollar of income — this is what pre-tax contributions save you.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What does 'pre-tax' mean for a retirement contribution?",
        options: ["You pay taxes on it immediately", "The money is contributed before income taxes are applied", "It's exempt from all taxes forever", "It's taxed at a reduced rate"],
        correct: 1,
        explanation: "Pre-tax contributions are deducted from your income before taxes are calculated, reducing your current taxable income. You'll pay taxes when you withdraw in retirement."
      },
      {
        question: "When is a Roth account generally preferred over Traditional?",
        options: ["When you're in a high tax bracket now", "When you expect to be in a higher bracket in retirement", "When you need the tax deduction immediately", "When you're close to retirement"],
        correct: 1,
        explanation: "Roth is best when you expect higher tax rates later — you pay taxes now at the lower rate, and your withdrawals in retirement are completely tax-free."
      },
      {
        question: "What is the 2025 employee contribution limit for a 401(k)?",
        options: ["$7,000", "$19,500", "$23,500", "$30,000"],
        correct: 2,
        explanation: "The 2025 employee contribution limit for a 401(k) is $23,500. This applies to the total of Traditional and Roth 401(k) contributions combined."
      }
    ]
  },
  {
    id: 2,
    title: "401(k) & Roth 401(k)",
    icon: "🏦",
    description: "Your employer-sponsored retirement savings — how they work and Microsoft's match.",
    content: `
      <h2>🏦 401(k) & Roth 401(k)</h2>
      <p>The 401(k) is the cornerstone of workplace retirement savings. At Microsoft, you have access to both <strong>Traditional 401(k)</strong> and <strong>Roth 401(k)</strong> through Fidelity.</p>

      <div class="info-card accent">
        <h3>🔷 Microsoft's 401(k) Match</h3>
        <p>Microsoft matches <strong>50% of your contributions up to the IRS limit</strong>. That's free money!</p>
        <p>If you contribute $23,500 in 2025, Microsoft contributes <strong>$11,750</strong> — that's a 50% return before any investment gains.</p>
        <p>⚠️ <em>The match is always deposited as <strong>pre-tax</strong>, even if you contribute to Roth 401(k).</em></p>
      </div>

      <div class="info-card">
        <h3>📊 Traditional 401(k)</h3>
        <p><strong>How it works:</strong> Money goes in pre-tax → grows tax-deferred → taxed when withdrawn in retirement.</p>
        <ul>
          <li>Reduces your taxable income <strong>today</strong></li>
          <li>Great if your current tax bracket is higher than your expected retirement bracket</li>
          <li>Required Minimum Distributions (RMDs) start at age 73</li>
        </ul>
        <p><strong>Example:</strong> If you contribute $23,500 and you're in the 24% bracket, you save <strong>$5,640 in federal taxes this year</strong>.</p>
      </div>

      <div class="info-card">
        <h3>📊 Roth 401(k)</h3>
        <p><strong>How it works:</strong> Money goes in after-tax → grows tax-free → withdrawals in retirement are <strong>tax-free</strong>.</p>
        <ul>
          <li>You pay taxes now, but <strong>never again</strong> on that money</li>
          <li>Great for early-career employees or if you expect tax rates to rise</li>
          <li>No income limits (unlike Roth IRA)</li>
        </ul>
        <p>💡 <em>You can split contributions between Traditional and Roth 401(k), but the combined total can't exceed $23,500.</em></p>
      </div>

      <div class="info-card">
        <h3>⚙️ How to Change at Microsoft</h3>
        <p>Log into <strong>Fidelity NetBenefits</strong> (netbenefits.fidelity.com) to:</p>
        <ul>
          <li>Set your contribution percentage (Traditional, Roth, or both)</li>
          <li>Choose your investments (target-date funds, index funds, etc.)</li>
          <li>Changes typically take effect within 1–2 pay periods</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>Employer Match</dt><dd>Free money your employer contributes based on your own contributions.</dd>
          <dt>Vesting</dt><dd>How long you must work before employer match money is fully yours. (Microsoft match vests immediately!)</dd>
          <dt>RMD</dt><dd>Required Minimum Distribution — mandatory withdrawals starting at age 73 for Traditional accounts.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What is Microsoft's 401(k) match?",
        options: ["100% up to 6%", "50% of your contributions up to the IRS limit", "Dollar-for-dollar up to $10,000", "No match is offered"],
        correct: 1,
        explanation: "Microsoft matches 50% of your contributions up to the IRS limit. If you max out at $23,500, Microsoft adds $11,750."
      },
      {
        question: "Can you contribute to both Traditional and Roth 401(k)?",
        options: ["No, you must pick one", "Yes, but the combined total can't exceed $23,500", "Yes, each has its own $23,500 limit", "Only if your income is below a threshold"],
        correct: 1,
        explanation: "You can split contributions between Traditional and Roth 401(k), but the combined employee contribution limit is $23,500 for 2025."
      },
      {
        question: "If you contribute to Roth 401(k), how is Microsoft's match deposited?",
        options: ["Also as Roth", "As pre-tax (Traditional)", "Split 50/50", "You choose"],
        correct: 1,
        explanation: "Employer matches are always deposited as pre-tax (Traditional), regardless of whether your contributions are Traditional or Roth."
      }
    ]
  },
  {
    id: 3,
    title: "Mega Backdoor Roth",
    icon: "🚀",
    description: "The advanced strategy to contribute up to $70,000+ total to your 401(k) and convert to Roth.",
    content: `
      <h2>🚀 Mega Backdoor Roth</h2>
      <p>The Mega Backdoor Roth is one of the most powerful tax strategies available — and Microsoft's plan supports it. It lets you contribute <strong>far beyond</strong> the normal $23,500 limit.</p>

      <div class="info-card accent">
        <h3>🔢 The Three 401(k) Buckets</h3>
        <p>The IRS sets a <strong>total 401(k) limit of $70,000</strong> (2025) across all sources:</p>
        <ol>
          <li><strong>Employee contributions:</strong> $23,500 (Traditional + Roth)</li>
          <li><strong>Employer match:</strong> $11,750 (if you max out #1)</li>
          <li><strong>After-tax contributions:</strong> Up to ~$34,750 (the remaining space)</li>
        </ol>
        <p>The <strong>Mega Backdoor Roth</strong> uses bucket #3 — after-tax contributions that you then convert to Roth.</p>
      </div>

      <div class="info-card">
        <h3>📋 How It Works (Step by Step)</h3>
        <ol>
          <li>Max out your regular 401(k) contributions ($23,500)</li>
          <li>Make <strong>after-tax</strong> contributions to your 401(k) — this is a separate election on Fidelity</li>
          <li>Convert those after-tax contributions to <strong>Roth</strong> (either in-plan Roth conversion or rollover to Roth IRA)</li>
          <li>The converted amount now grows <strong>tax-free forever</strong></li>
        </ol>
        <p>⚠️ <em>Convert as soon as possible to minimize taxable gains on the after-tax contributions.</em></p>
      </div>

      <div class="info-card">
        <h3>💰 Why This Is So Powerful</h3>
        <ul>
          <li>You can contribute up to ~$34,750 <strong>extra</strong> per year to Roth</li>
          <li>No income limits (unlike direct Roth IRA contributions)</li>
          <li>Over 20 years at 8% returns, $34,750/year grows to <strong>~$1.6 million tax-free</strong></li>
        </ul>
      </div>

      <div class="info-card">
        <h3>⚙️ Setting It Up at Microsoft</h3>
        <p>On <strong>Fidelity NetBenefits</strong>:</p>
        <ol>
          <li>Go to "Contributions" → Look for "After-Tax" contribution option</li>
          <li>Set a percentage or dollar amount</li>
          <li>Enable "In-Plan Roth Conversion" if available, or periodically roll over to an external Roth IRA</li>
        </ol>
        <p>💡 <em>Check with Fidelity if automatic in-plan conversions are available — this simplifies the process significantly.</em></p>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>After-Tax Contributions</dt><dd>401(k) contributions made with after-tax dollars — beyond the normal employee limit.</dd>
          <dt>In-Plan Roth Conversion</dt><dd>Converting after-tax contributions to Roth within the same 401(k) plan.</dd>
          <dt>Mega Backdoor Roth</dt><dd>The strategy of making after-tax 401(k) contributions and converting them to Roth.</dd>
          <dt>Total Annual Limit</dt><dd>$70,000 (2025) — the combined limit across employee + employer + after-tax contributions.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What is the total 401(k) contribution limit for 2025 (all sources)?",
        options: ["$23,500", "$46,000", "$70,000", "$100,000"],
        correct: 2,
        explanation: "The total 401(k) limit for 2025 is $70,000, which includes employee contributions ($23,500) + employer match + after-tax contributions."
      },
      {
        question: "What makes the Mega Backdoor Roth work?",
        options: ["Contributing pre-tax above the limit", "Making after-tax contributions and converting them to Roth", "Using a traditional IRA as a backdoor", "Contributing to multiple 401(k) plans"],
        correct: 1,
        explanation: "The Mega Backdoor Roth works by making after-tax 401(k) contributions (using the space between your contributions + match and the $70K total limit), then converting those to Roth."
      },
      {
        question: "Why should you convert after-tax contributions to Roth as soon as possible?",
        options: ["To avoid penalties", "To minimize taxable gains on the after-tax money", "It's required by law", "To get the employer match"],
        correct: 1,
        explanation: "Converting quickly minimizes the investment gains that accumulate in the after-tax bucket — those gains would be taxable if you wait too long to convert."
      }
    ]
  },
  {
    id: 4,
    title: "HSA — Triple Tax Advantage",
    icon: "🏥",
    description: "The only account with triple tax benefits — and it's not just for medical expenses.",
    content: `
      <h2>🏥 HSA — Triple Tax Advantage</h2>
      <p>The Health Savings Account (HSA) is often called the <strong>most tax-advantaged account in existence</strong>. It's the only account that offers <em>three</em> tax benefits.</p>

      <div class="info-card accent">
        <h3>🏆 The Triple Tax Advantage</h3>
        <ol>
          <li><strong>Tax-deductible contributions</strong> — reduces your taxable income</li>
          <li><strong>Tax-free growth</strong> — investments grow without being taxed</li>
          <li><strong>Tax-free withdrawals</strong> — for qualified medical expenses</li>
        </ol>
        <p>No other account in the US tax code offers all three!</p>
      </div>

      <div class="info-card">
        <h3>✅ Eligibility</h3>
        <p>To contribute to an HSA, you must be enrolled in a <strong>High Deductible Health Plan (HDHP)</strong>.</p>
        <p>At Microsoft, this is the HDHP option during benefits enrollment. If you're on a PPO or other plan, you can't contribute to an HSA.</p>
        <ul>
          <li>2025 individual limit: <strong>$4,300</strong></li>
          <li>2025 family limit: <strong>$8,550</strong></li>
          <li>Catch-up (55+): Additional $1,000</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>🧠 The HSA Secret: Use It as a Retirement Account</h3>
        <p>The real power of the HSA is using it as a <strong>long-term investment account</strong>:</p>
        <ol>
          <li>Contribute the max each year</li>
          <li><strong>Invest</strong> the balance in index funds (don't leave it in cash!)</li>
          <li>Pay current medical expenses out of pocket</li>
          <li>Save your receipts — you can reimburse yourself <strong>decades later</strong>, tax-free</li>
          <li>After age 65, you can withdraw for <em>any</em> purpose (taxed like a Traditional IRA, but no penalty)</li>
        </ol>
        <p>💡 <em>This makes the HSA effectively a super Roth IRA for medical expenses, or a Traditional IRA for everything else after 65.</em></p>
      </div>

      <div class="info-card">
        <h3>⚙️ Microsoft's HSA</h3>
        <p>Microsoft's HSA is administered through <strong>Fidelity</strong>. Key details:</p>
        <ul>
          <li>Microsoft may contribute a seed amount if you enroll in the HDHP</li>
          <li>You can invest your HSA balance once it reaches the investment threshold</li>
          <li>Contributions are made via payroll deduction (pre-FICA, saving you an additional 7.65%!)</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>HDHP</dt><dd>High Deductible Health Plan — required to be eligible for an HSA.</dd>
          <dt>Qualified Medical Expenses</dt><dd>IRS-approved expenses you can pay with HSA funds tax-free (prescriptions, doctor visits, vision, dental, etc.).</dd>
          <dt>FICA Taxes</dt><dd>Social Security (6.2%) and Medicare (1.45%) taxes — HSA payroll deductions avoid these too!</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What are the three tax advantages of an HSA?",
        options: ["Free contributions, free growth, free withdrawals", "Tax-deductible contributions, tax-free growth, tax-free withdrawals for medical", "No FICA, no state, no federal taxes", "Triple matching from employer"],
        correct: 1,
        explanation: "The HSA's triple tax advantage: contributions are tax-deductible, investments grow tax-free, and withdrawals for qualified medical expenses are tax-free."
      },
      {
        question: "What is the 2025 HSA contribution limit for an individual?",
        options: ["$3,300", "$4,300", "$7,000", "$8,550"],
        correct: 1,
        explanation: "The 2025 HSA contribution limit for an individual with self-only HDHP coverage is $4,300."
      },
      {
        question: "Why is paying medical expenses out of pocket (instead of using HSA) a smart strategy?",
        options: ["HSA money isn't accepted by doctors", "It lets your HSA investments grow tax-free for decades", "Out of pocket is cheaper", "You can't use HSA for medical expenses"],
        correct: 1,
        explanation: "By paying out of pocket and letting your HSA grow, you maximize tax-free investment growth. You can reimburse yourself from the HSA at any point in the future."
      }
    ]
  },
  {
    id: 5,
    title: "FSA — Flexible Spending",
    icon: "💊",
    description: "Use pre-tax dollars for medical and dependent care — but use it or lose it.",
    content: `
      <h2>💊 FSA — Flexible Spending Account</h2>
      <p>A Flexible Spending Account lets you set aside <strong>pre-tax money</strong> for medical or dependent care expenses. Unlike an HSA, it doesn't require an HDHP — but it has a <strong>use-it-or-lose-it</strong> rule.</p>

      <div class="info-card">
        <h3>🏥 Healthcare FSA</h3>
        <p><strong>2025 limit: $3,300</strong></p>
        <ul>
          <li>Pre-tax contributions reduce your taxable income</li>
          <li>Use for medical, dental, and vision expenses</li>
          <li>Full annual amount is available on Day 1 (you don't have to wait to accumulate it)</li>
          <li>⚠️ <strong>Use it or lose it:</strong> Unused funds expire at year end (some plans allow a $640 rollover or 2.5-month grace period)</li>
        </ul>
        <p>💡 <em>You generally <strong>cannot</strong> have both an HSA and a Healthcare FSA. However, you CAN have a Limited-Purpose FSA (dental/vision only) alongside an HSA.</em></p>
      </div>

      <div class="info-card">
        <h3>👶 Dependent Care FSA (DCFSA)</h3>
        <p><strong>2025 limit: $5,000</strong> (single or married filing jointly)</p>
        <ul>
          <li>For childcare expenses (daycare, preschool, after-school care)</li>
          <li>Also covers elder care for dependents</li>
          <li>Children must be under 13</li>
          <li>Separate from Healthcare FSA — you can have both</li>
        </ul>
        <p>⚠️ <em>Unlike Healthcare FSA, only the amount contributed so far is available (not the full annual amount upfront).</em></p>
      </div>

      <div class="info-card">
        <h3>📊 FSA vs. HSA</h3>
        <table class="data-table">
          <tr><th>Feature</th><th>FSA</th><th>HSA</th></tr>
          <tr><td>HDHP required?</td><td>No</td><td>Yes</td></tr>
          <tr><td>Rolls over?</td><td>Limited</td><td>Yes, fully</td></tr>
          <tr><td>Investable?</td><td>No</td><td>Yes</td></tr>
          <tr><td>Portable?</td><td>No (lost if you leave)</td><td>Yes, yours forever</td></tr>
          <tr><td>Triple tax benefit?</td><td>No (just pre-tax in)</td><td>Yes</td></tr>
        </table>
      </div>

      <div class="info-card">
        <h3>💡 How Much to Contribute</h3>
        <p>Since FSA funds expire, estimate carefully:</p>
        <ul>
          <li>Add up last year's medical out-of-pocket expenses</li>
          <li>Include expected costs (glasses, dental cleanings, prescriptions)</li>
          <li>When in doubt, <strong>underestimate</strong> to avoid losing money</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>Use-It-or-Lose-It</dt><dd>Unused FSA funds expire at the end of the plan year (with limited exceptions).</dd>
          <dt>Grace Period</dt><dd>Some plans allow a 2.5-month extension to use remaining funds.</dd>
          <dt>Limited-Purpose FSA</dt><dd>An FSA that covers only dental and vision — can be used alongside an HSA.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What is the key drawback of a Healthcare FSA compared to an HSA?",
        options: ["Lower contribution limits", "Use-it-or-lose-it — unused funds expire", "You can't use it for medical expenses", "Higher taxes"],
        correct: 1,
        explanation: "The biggest drawback of an FSA is the use-it-or-lose-it rule — unlike an HSA, unused funds generally don't roll over (some plans allow a small rollover or grace period)."
      },
      {
        question: "Can you have both an HSA and a Healthcare FSA at the same time?",
        options: ["Yes, always", "No, generally not (but you can have a Limited-Purpose FSA)", "Only if you're over 55", "Only if your employer allows it"],
        correct: 1,
        explanation: "You generally cannot have both an HSA and a Healthcare FSA. However, you can pair an HSA with a Limited-Purpose FSA that covers only dental and vision expenses."
      },
      {
        question: "What is the 2025 Dependent Care FSA limit?",
        options: ["$3,300", "$5,000", "$7,000", "$10,000"],
        correct: 1,
        explanation: "The 2025 Dependent Care FSA limit is $5,000 for single filers or married filing jointly ($2,500 for married filing separately)."
      }
    ]
  },
  {
    id: 6,
    title: "IRA & Roth IRA",
    icon: "📈",
    description: "Individual retirement accounts — additional tax-advantaged space beyond your 401(k).",
    content: `
      <h2>📈 IRA & Roth IRA</h2>
      <p>Individual Retirement Accounts (IRAs) give you <strong>additional</strong> tax-advantaged space beyond your 401(k). You open these on your own (not through your employer).</p>

      <div class="info-card">
        <h3>📊 Traditional IRA</h3>
        <p><strong>2025 limit: $7,000</strong> ($8,000 if 50+)</p>
        <ul>
          <li>Contributions may be tax-deductible (depends on income and whether you have a 401k)</li>
          <li>At Microsoft income levels, Traditional IRA deduction is likely <strong>phased out</strong></li>
          <li>Withdrawals taxed as ordinary income in retirement</li>
          <li>10% early withdrawal penalty before age 59½</li>
        </ul>
        <p>⚠️ <em>If you have a 401(k) and earn over ~$87,000 (2025), your Traditional IRA contribution is NOT tax-deductible. Consider Roth or Backdoor Roth instead.</em></p>
      </div>

      <div class="info-card">
        <h3>📊 Roth IRA</h3>
        <p><strong>2025 limit: $7,000</strong> ($8,000 if 50+)</p>
        <ul>
          <li>Contributions are after-tax, but growth and withdrawals are <strong>tax-free</strong></li>
          <li>No RMDs — money can grow forever</li>
          <li>You can withdraw <strong>contributions</strong> (not gains) anytime without penalty</li>
          <li>⚠️ <strong>Income limits apply:</strong> Phase-out begins at $150,000 MAGI (single) for 2025</li>
        </ul>
      </div>

      <div class="info-card accent">
        <h3>🚪 The Backdoor Roth IRA</h3>
        <p>If you earn too much for direct Roth IRA contributions (likely at Microsoft), use the <strong>Backdoor Roth</strong>:</p>
        <ol>
          <li>Contribute to a <strong>Traditional IRA</strong> (non-deductible)</li>
          <li>Immediately <strong>convert</strong> to a Roth IRA</li>
          <li>Since the contribution wasn't deducted, there's minimal or no tax on conversion</li>
        </ol>
        <p>⚠️ <em>Watch out for the <strong>pro-rata rule</strong>: If you have other pre-tax IRA balances, part of the conversion will be taxable. Keep Traditional IRA balances at $0 for a clean conversion.</em></p>
      </div>

      <div class="info-card">
        <h3>🏦 Where to Open an IRA</h3>
        <ul>
          <li><strong>Fidelity</strong> — Same provider as Microsoft's 401(k), easy to manage everything in one place</li>
          <li><strong>Vanguard</strong> — Known for low-cost index funds</li>
          <li><strong>Schwab</strong> — Great platform with no minimums</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>MAGI</dt><dd>Modified Adjusted Gross Income — used to determine eligibility for Roth IRA and deductibility of Traditional IRA.</dd>
          <dt>Backdoor Roth</dt><dd>Contributing to a non-deductible Traditional IRA and converting to Roth — a workaround for high earners.</dd>
          <dt>Pro-Rata Rule</dt><dd>If you have pre-tax IRA money, conversions are taxed proportionally — not just on the amount you're converting.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "Why might a Microsoft employee use a Backdoor Roth IRA?",
        options: ["To avoid the 401(k) limit", "Their income is too high for direct Roth IRA contributions", "To get a larger tax deduction", "Microsoft doesn't offer a 401(k)"],
        correct: 1,
        explanation: "Microsoft employees typically earn above the Roth IRA income limits. The Backdoor Roth lets them contribute to a non-deductible Traditional IRA and convert to Roth."
      },
      {
        question: "What is the pro-rata rule?",
        options: ["A rule limiting how much you can convert", "If you have pre-tax IRA money, conversions are taxed proportionally", "A penalty for early withdrawals", "A rule about employer matching"],
        correct: 1,
        explanation: "The pro-rata rule means if you have pre-tax money in any Traditional IRA, the IRS taxes your conversion proportionally — not just the non-deductible amount you're trying to convert."
      },
      {
        question: "What is a key advantage of Roth IRA over Traditional IRA?",
        options: ["Higher contribution limits", "No required minimum distributions and tax-free withdrawals", "Tax deduction on contributions", "Employer matching"],
        correct: 1,
        explanation: "Roth IRAs have no required minimum distributions (RMDs) and qualified withdrawals are completely tax-free — your money can grow indefinitely."
      }
    ]
  },
  {
    id: 7,
    title: "Microsoft ESPP",
    icon: "📊",
    description: "Buy Microsoft stock at a discount — how the Employee Stock Purchase Plan works.",
    content: `
      <h2>📊 Microsoft ESPP</h2>
      <p>The Employee Stock Purchase Plan (ESPP) lets you buy Microsoft stock at a <strong>10% discount</strong> off the market price. It's essentially free money if used correctly.</p>

      <div class="info-card accent">
        <h3>💰 How Microsoft ESPP Works</h3>
        <ul>
          <li>You contribute <strong>1–15% of your base pay</strong> (up to IRS limit of $25,000 in stock value per year)</li>
          <li>Money is deducted from your paycheck over a <strong>3-month enrollment period</strong></li>
          <li>At the end of the period, your accumulated funds buy Microsoft stock at a <strong>10% discount</strong> off the market price on the purchase date</li>
          <li>You get an immediate <strong>~11.1% return</strong> on your money (10/90 = 11.1%)</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>📅 Enrollment Periods</h3>
        <p>Microsoft ESPP has <strong>quarterly enrollment periods</strong>:</p>
        <ul>
          <li>Period 1: February – April (purchase in May)</li>
          <li>Period 2: May – July (purchase in August)</li>
          <li>Period 3: August – October (purchase in November)</li>
          <li>Period 4: November – January (purchase in February)</li>
        </ul>
        <p>You must enroll during the open enrollment window before each period.</p>
      </div>

      <div class="info-card">
        <h3>🧮 Tax Implications</h3>
        <p>ESPP has specific tax rules:</p>
        <ul>
          <li><strong>The 10% discount</strong> is taxed as <strong>ordinary income</strong> (reported on your W-2)</li>
          <li>If you sell immediately ("sell to cover"): You only pay income tax on the discount — minimal additional gains</li>
          <li><strong>Qualifying disposition:</strong> Hold for 2+ years from enrollment start AND 1+ year from purchase date for potential capital gains treatment</li>
          <li><strong>Disqualifying disposition:</strong> Sell before the holding period — discount taxed as ordinary income</li>
        </ul>
        <p>💡 <em>Many employees sell immediately after purchase to lock in the 10% gain and avoid concentration risk in Microsoft stock.</em></p>
      </div>

      <div class="info-card">
        <h3>📊 Strategy: Sell Immediately vs. Hold</h3>
        <ul>
          <li><strong>Sell immediately:</strong> Guaranteed ~11% return every 3 months. No risk of stock decline. Diversify proceeds.</li>
          <li><strong>Hold for qualifying disposition:</strong> Potential for better tax treatment, but you bear the risk of MSFT stock declining.</li>
          <li><strong>Recommendation for most people:</strong> Sell immediately and invest the proceeds in a diversified portfolio. You likely already have significant MSFT exposure through RSUs and stock awards.</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>⚙️ How to Enroll/Change</h3>
        <p>Manage your ESPP through <strong>UW Benefits (Microsoft Benefits portal)</strong> or <strong>Fidelity</strong>:</p>
        <ul>
          <li>Set your contribution percentage (1–15% of base pay)</li>
          <li>Enrollment windows open before each quarterly period</li>
          <li>You can change your contribution or withdraw for the next period</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>ESPP</dt><dd>Employee Stock Purchase Plan — lets you buy company stock at a discount.</dd>
          <dt>Qualifying Disposition</dt><dd>Selling ESPP shares after holding periods are met — may result in better tax treatment.</dd>
          <dt>Disqualifying Disposition</dt><dd>Selling before holding periods are met — discount is taxed as ordinary income.</dd>
          <dt>Concentration Risk</dt><dd>Having too much of your net worth in one stock (MSFT) — your job and investments are both tied to the same company.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "What discount does Microsoft's ESPP offer?",
        options: ["5%", "10%", "15%", "20%"],
        correct: 1,
        explanation: "Microsoft's ESPP offers a 10% discount off the market price on the purchase date, giving you an immediate ~11.1% return."
      },
      {
        question: "Why do many employees sell ESPP shares immediately after purchase?",
        options: ["It's required by Microsoft", "To lock in the guaranteed discount and avoid concentration risk", "The shares expire if not sold", "To avoid all taxes"],
        correct: 1,
        explanation: "Selling immediately locks in the ~11% guaranteed return and reduces concentration risk (having too much tied to one stock), especially since you likely already have RSUs."
      },
      {
        question: "How is the ESPP discount taxed?",
        options: ["Capital gains rate", "As ordinary income", "Not taxed at all", "As a gift"],
        correct: 1,
        explanation: "The 10% ESPP discount is treated as ordinary income and reported on your W-2, regardless of when you sell."
      }
    ]
  },
  {
    id: 8,
    title: "The Paycheck Calculator",
    icon: "🧮",
    description: "Understand how contributions affect your take-home pay and see your total tax savings.",
    content: `
      <h2>🧮 Understanding Your Paycheck</h2>
      <p>Now that you know all the accounts, let's put it together. Understanding how each contribution affects your take-home pay helps you make informed decisions.</p>

      <div class="info-card accent">
        <h3>📊 Your Paycheck Deduction Order</h3>
        <p>Here's how your gross pay gets reduced before you see your take-home:</p>
        <ol>
          <li><strong>Pre-tax 401(k)</strong> → Reduces federal, state, and local income tax</li>
          <li><strong>HSA</strong> (payroll) → Reduces federal, state, AND FICA taxes</li>
          <li><strong>FSA</strong> (payroll) → Reduces federal, state, AND FICA taxes</li>
          <li><strong>ESPP</strong> → Deducted from after-tax pay (no tax benefit on contribution)</li>
          <li><strong>Roth 401(k)</strong> → Deducted from after-tax pay (tax-free later)</li>
          <li><strong>Federal income tax</strong></li>
          <li><strong>State income tax</strong> (varies by state)</li>
          <li><strong>FICA</strong> (Social Security 6.2% + Medicare 1.45%)</li>
        </ol>
      </div>

      <div class="info-card">
        <h3>💡 Example: $200,000 Salary (Single)</h3>
        <p>With maximum contributions:</p>
        <table class="data-table">
          <tr><th>Item</th><th>Annual</th><th>Per Paycheck (24)</th></tr>
          <tr><td>Gross Pay</td><td>$200,000</td><td>$8,333</td></tr>
          <tr><td>Pre-Tax 401(k)</td><td>-$23,500</td><td>-$979</td></tr>
          <tr><td>HSA</td><td>-$4,300</td><td>-$179</td></tr>
          <tr><td>FSA</td><td>-$3,300</td><td>-$138</td></tr>
          <tr><td>Taxable Income</td><td>$168,900</td><td>$7,037</td></tr>
          <tr><td>Federal Tax</td><td>~-$30,100</td><td>~-$1,254</td></tr>
          <tr><td>State Tax (WA = 0)</td><td>$0</td><td>$0</td></tr>
          <tr><td>FICA</td><td>~-$13,200</td><td>~-$550</td></tr>
          <tr><td>ESPP (10%)</td><td>-$20,000</td><td>-$833</td></tr>
          <tr><td><strong>Take-Home</strong></td><td><strong>~$105,400</strong></td><td><strong>~$4,400</strong></td></tr>
        </table>
        <p>💡 <em>Use the calculator tab to model your exact situation!</em></p>
      </div>

      <div class="info-card">
        <h3>🎯 The Annual Tax Savings</h3>
        <p>With the above scenario, your pre-tax contributions save you approximately:</p>
        <ul>
          <li><strong>401(k):</strong> ~$5,640 in federal taxes (24% bracket)</li>
          <li><strong>HSA:</strong> ~$1,360 in taxes (including FICA savings)</li>
          <li><strong>FSA:</strong> ~$1,040 in taxes (including FICA savings)</li>
          <li><strong>Total annual tax savings: ~$8,040</strong></li>
        </ul>
      </div>

      <div class="info-card">
        <h3>⚖️ Finding Your Balance</h3>
        <p>The "right" contribution levels depend on your goals:</p>
        <ul>
          <li><strong>Priority 1:</strong> 401(k) up to the full match (50% of IRS limit at Microsoft = always max it)</li>
          <li><strong>Priority 2:</strong> HSA max (if on HDHP) — best tax treatment</li>
          <li><strong>Priority 3:</strong> ESPP at 10–15% — guaranteed 10% return</li>
          <li><strong>Priority 4:</strong> Mega Backdoor Roth — if cash flow allows</li>
          <li><strong>Priority 5:</strong> Backdoor Roth IRA — extra $7,000/year</li>
        </ul>
      </div>

      <div class="key-terms">
        <h3>📖 Key Terms</h3>
        <dl>
          <dt>Gross Pay</dt><dd>Your total pay before any deductions or taxes.</dd>
          <dt>Net Pay (Take-Home)</dt><dd>What you actually receive after all deductions and taxes.</dd>
          <dt>FICA</dt><dd>Federal Insurance Contributions Act — Social Security (6.2%) + Medicare (1.45%) = 7.65%.</dd>
          <dt>W-4</dt><dd>The form that determines how much federal tax is withheld from your paycheck.</dd>
        </dl>
      </div>
    `,
    quiz: [
      {
        question: "Which contribution reduces FICA taxes in addition to income taxes?",
        options: ["Traditional 401(k)", "HSA via payroll deduction", "Roth 401(k)", "ESPP"],
        correct: 1,
        explanation: "HSA contributions made through payroll deduction are exempt from FICA taxes (Social Security + Medicare), saving you an additional 7.65% compared to other pre-tax contributions."
      },
      {
        question: "What should be the #1 priority for contributions?",
        options: ["ESPP", "Mega Backdoor Roth", "401(k) up to the full match", "Roth IRA"],
        correct: 2,
        explanation: "The 401(k) match should be your top priority — Microsoft matches 50% of your contributions, which is an immediate 50% return on your money."
      },
      {
        question: "In Washington state, how much state income tax do you pay?",
        options: ["5%", "10%", "0% — Washington has no state income tax", "It depends on your income"],
        correct: 2,
        explanation: "Washington state has no state income tax, which is one of the financial benefits of working at Microsoft's Redmond headquarters."
      }
    ]
  }
];

const CALCULATOR_DEFAULTS = {
  salary: 200000,
  traditional401k: 23500,
  roth401k: 0,
  afterTax401k: 0,
  hsa: 4300,
  fsa: 0,
  esppPercent: 10,
  state: 'WA',
  filingStatus: 'single'
};

// 2025 Federal Tax Brackets (Single)
const FEDERAL_BRACKETS_2025 = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11925, max: 48475, rate: 0.12 },
  { min: 48475, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250525, rate: 0.32 },
  { min: 250525, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 }
];

const STANDARD_DEDUCTION_2025 = 15700;
const SOCIAL_SECURITY_RATE = 0.062;
const SOCIAL_SECURITY_CAP = 176100;
const MEDICARE_RATE = 0.0145;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const ADDITIONAL_MEDICARE_THRESHOLD = 200000;

function calculateFederalTax(taxableIncome) {
  let tax = 0;
  for (const bracket of FEDERAL_BRACKETS_2025) {
    if (taxableIncome <= bracket.min) break;
    const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxableInBracket * bracket.rate;
  }
  return tax;
}

function calculateFICA(grossSalary, hsaPayroll, fsaPayroll) {
  const ficaGross = grossSalary - hsaPayroll - fsaPayroll;
  const ss = Math.min(ficaGross, SOCIAL_SECURITY_CAP) * SOCIAL_SECURITY_RATE;
  let medicare = ficaGross * MEDICARE_RATE;
  if (ficaGross > ADDITIONAL_MEDICARE_THRESHOLD) {
    medicare += (ficaGross - ADDITIONAL_MEDICARE_THRESHOLD) * ADDITIONAL_MEDICARE_RATE;
  }
  return { ss, medicare, total: ss + medicare };
}

// IRS limits for 2025
const LIMITS = {
  employee401k: 23500,
  total401k: 70000,
  hsa_individual: 4300,
  hsa_family: 8550,
  fsa: 3300,
  ira: 7000,
  espp: 25000
};

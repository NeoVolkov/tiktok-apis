// API Configuration
const API_BASE_URL = "https://tiktok-api45.p.rapidapi.com/api/v1";
const API_HOST = "tiktok-api45.p.rapidapi.com";

// API Endpoints configuration with their parameters
const API_CONFIGS = {
  "get-user-detail": {
    title: "User Detail",
    endpoint: "/user/detail",
    params: [
      {
        name: "unique_id",
        label: "Username (unique_id)",
        type: "text",
        placeholder: "Example: zg.520",
        required: true,
        description: "TikTok username",
      },
    ],
  },
  "get-user-post": {
    title: "User Posts",
    endpoint: "/user/posts",
    params: [
      {
        name: "sec_uid",
        label: "SecUID",
        type: "text",
        placeholder: "MS4wLjABAAAA...",
        required: true,
        description: "User's SecUID (get from User Detail API)",
        helper: "💡 Use User Detail API with username to get SecUID",
      },
      {
        name: "count",
        label: "Count",
        type: "number",
        placeholder: "30",
        required: false,
        value: "30",
        description: "Number of videos (default: 30)",
      },
      {
        name: "cursor",
        label: "Cursor",
        type: "number",
        placeholder: "0",
        required: false,
        value: "0",
        description: "Pagination position (default: 0)",
      },
    ],
  },
  "get-user-popular-post": {
    title: "Popular Posts",
    endpoint: "/user/popular-posts",
    params: [
      {
        name: "sec_uid",
        label: "SecUID",
        type: "text",
        placeholder: "MS4wLjABAAAA...",
        required: true,
        description: "User's SecUID (get from User Detail API)",
        helper: "💡 Use User Detail API with username to get SecUID",
      },
      {
        name: "count",
        label: "Count",
        type: "number",
        placeholder: "30",
        required: false,
        value: "30",
        description: "Number of videos (default: 30)",
      },
      {
        name: "cursor",
        label: "Cursor",
        type: "number",
        placeholder: "0",
        required: false,
        value: "0",
        description: "Pagination position (default: 0)",
      },
    ],
  },
  "get-user-followers": {
    title: "User Followers",
    endpoint: "/user/followers",
    params: [
      {
        name: "sec_uid",
        label: "SecUID",
        type: "text",
        placeholder: "MS4wLjABAAAA...",
        required: true,
        description: "User's SecUID (get from User Detail API)",
        helper: "💡 Use User Detail API with username to get SecUID",
      },
      {
        name: "count",
        label: "Count",
        type: "number",
        placeholder: "30",
        required: false,
        value: "30",
        description: "Number of followers (default: 30)",
      },
      {
        name: "min_cursor",
        label: "Min Cursor",
        type: "number",
        placeholder: "0",
        required: false,
        value: "0",
        description: "Pagination position (default: 0)",
      },
    ],
  },
  "get-user-followings": {
    title: "User Followings",
    endpoint: "/user/followings",
    params: [
      {
        name: "sec_uid",
        label: "SecUID",
        type: "text",
        placeholder: "MS4wLjABAAAA...",
        required: true,
        description: "User's SecUID (get from User Detail API)",
        helper: "💡 Use User Detail API with username to get SecUID",
      },
      {
        name: "count",
        label: "Count",
        type: "number",
        placeholder: "30",
        required: false,
        value: "30",
        description: "Number of followings (default: 30)",
      },
      {
        name: "min_cursor",
        label: "Min Cursor",
        type: "number",
        placeholder: "0",
        required: false,
        value: "0",
        description: "Pagination position (default: 0)",
      },
    ],
  },
  "download-video": {
    title: "Download Video",
    endpoint: "/download/video",
    params: [
      {
        name: "url",
        label: "Video URL",
        type: "text",
        placeholder: "https://www.tiktok.com/@username/video/1234567890",
        required: true,
        description: "Full TikTok video URL",
      },
    ],
  },
};

// State
let currentAPI = null;

// DOM Elements
const apiButtons = document.querySelectorAll(".api-button");
const paramsCard = document.getElementById("paramsCard");
const paramsContainer = document.getElementById("paramsContainer");
const paramsForm = document.getElementById("paramsForm");
const loading = document.getElementById("loading");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");
const errorCard = document.getElementById("errorCard");
const errorContent = document.getElementById("errorContent");
const apiKeyInput = document.getElementById("apiKey");
const copyBtn = document.getElementById("copyBtn");

// Event Listeners
apiButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const apiType = button.dataset.api;
    selectAPI(apiType, button);
  });
});

paramsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await callAPI();
});

copyBtn.addEventListener("click", () => {
  const text = resultContent.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyBtn.textContent = "📋 Copy";
    }, 2000);
  });
});

// Load API key from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedApiKey = localStorage.getItem("tiktok_api_key");
  if (savedApiKey) {
    apiKeyInput.value = savedApiKey;
  }
});

// Save API key to localStorage
apiKeyInput.addEventListener("change", () => {
  localStorage.setItem("tiktok_api_key", apiKeyInput.value);
});

// Functions
function selectAPI(apiType, button) {
  // Update UI
  apiButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  currentAPI = apiType;
  const config = API_CONFIGS[apiType];

  // Hide results
  hideResults();

  // Generate form
  generateParamsForm(config);

  // Show params card
  paramsCard.style.display = "block";
  paramsCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function generateParamsForm(config) {
  paramsContainer.innerHTML = "";

  config.params.forEach((param) => {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";

    const label = document.createElement("label");
    label.setAttribute("for", param.name);
    label.textContent = param.label;
    if (param.required) {
      label.innerHTML += ' <span style="color: var(--error)">*</span>';
    }

    let input;
    if (param.type === "select") {
      input = document.createElement("select");
      param.options.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        input.appendChild(opt);
      });
    } else {
      input = document.createElement("input");
      input.type = param.type;
      input.placeholder = param.placeholder;
      input.className = "input";
    }

    input.id = param.name;
    input.name = param.name;
    input.required = param.required;

    if (param.value) {
      input.value = param.value;
    }

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    if (param.description) {
      const hint = document.createElement("small");
      hint.className = "hint";
      hint.textContent = param.description;
      formGroup.appendChild(hint);
    }

    if (param.helper) {
      const helper = document.createElement("small");
      helper.className = "hint helper-note";
      helper.textContent = param.helper;
      formGroup.appendChild(helper);
    }

    paramsContainer.appendChild(formGroup);
  });
}

async function callAPI() {
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey) {
    showError("Please enter your RapidAPI Key!");
    return;
  }

  if (!currentAPI) {
    showError("Please select an API endpoint!");
    return;
  }

  const config = API_CONFIGS[currentAPI];

  // Collect parameters
  const params = {};
  let isValid = true;

  config.params.forEach((param) => {
    const input = document.getElementById(param.name);
    const value = input.value.trim();

    if (param.required && !value) {
      isValid = false;
      input.style.borderColor = "var(--error)";
    } else {
      input.style.borderColor = "";
      if (value) {
        params[param.name] = value;
      }
    }
  });

  if (!isValid) {
    showError("Please fill in all required fields!");
    return;
  }

  // Build URL
  const queryString = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}${config.endpoint}?${queryString}`;

  // Show loading
  hideResults();
  loading.style.display = "flex";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    showResult(data);
  } catch (error) {
    showError(error.message);
  } finally {
    loading.style.display = "none";
  }
}

function showResult(data) {
  hideResults();
  resultContent.textContent = JSON.stringify(data, null, 2);
  resultCard.style.display = "block";
  resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showError(message) {
  hideResults();
  errorContent.textContent = message;
  errorCard.style.display = "block";
  errorCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function hideResults() {
  resultCard.style.display = "none";
  errorCard.style.display = "none";
  loading.style.display = "none";
}

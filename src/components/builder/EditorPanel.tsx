"use client";

import { useReadme } from "@/context/ReadmeContext";

export function EditorPanel() {
  const { state, dispatch } = useReadme();

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
      <h2 className="text-xl font-semibold mb-4">О себе</h2>

      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={state.bio.enabled}
          onChange={(e) =>
            dispatch({ type: "TOGGLE_BIO", payload: e.target.checked })
          }
          className="h-4 w-4 text-indigo-400 rounded focus:ring-indigo-500"
        />
        <span>Показать блок «О себе»</span>
      </label>

      {state.bio.enabled && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Имя</label>
            <input
              type="text"
              value={state.bio.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_BIO",
                  payload: { name: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ваше имя"
              onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Должность</label>
            <input
              type="text"
              value={state.bio.headline}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_BIO",
                  payload: { headline: e.target.value },
                })
              }
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Frontend-разработчик"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Описание</label>
            <textarea
              value={state.bio.description}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_BIO",
                  payload: { description: e.target.value },
                })
              }
              rows={3}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Расскажите о себе..."
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Технологии</h2>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={state.techStack.enabled}
            onChange={(e) =>
              dispatch({ type: "TOGGLE_TECH_STACK", payload: e.target.checked })
            }
            className="h-4 w-4 text-indigo-400 rounded focus:ring-indigo-500"
          />
          <span>Показать блок «Технологии»</span>
        </label>

        {state.techStack.enabled && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Технологии (через запятую)
              </label>
              <input
                type="text"
                value={state.techStack.technologies}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_TECH_STACK",
                    payload: { technologies: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="React, TypeScript, Next.js"
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
              />
              <p className="text-xs text-gray-400 mt-1">
                Введите названия через запятую. Поддерживаются: React, TypeScript, Python и др.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">GitHub Статистика</h2>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={state.githubStats.enabled}
            onChange={(e) =>
              dispatch({
                type: "TOGGLE_GITHUB_STATS",
                payload: e.target.checked,
              })
            }
            className="h-4 w-4 text-indigo-400 rounded focus:ring-indigo-500"
          />
          <span>Показать статистику GitHub</span>
        </label>

        {state.githubStats.enabled && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Ваш GitHub username
              </label>
              <input
                type="text"
                value={state.githubStats.username}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_GITHUB_STATS",
                    payload: { username: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="например: octocat"
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
              />
              <p className="text-xs text-gray-400 mt-1">
                Укажите ваш GitHub nickname для отображения статистики.
              </p>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={state.githubStats.showTopLangs}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_GITHUB_STATS",
                    payload: { showTopLangs: e.target.checked },
                  })
                }
                className="h-4 w-4 text-indigo-400 rounded focus:ring-indigo-500"
              />
              <span>Показать топ-языки</span>
            </label>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Контакты</h2>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={state.contacts.enabled}
            onChange={(e) =>
              dispatch({ type: "TOGGLE_CONTACTS", payload: e.target.checked })
            }
            className="h-4 w-4 text-indigo-400 rounded focus:ring-indigo-500"
          />
          <span>Показать контакты</span>
        </label>

        {state.contacts.enabled && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                GitHub (username или URL)
              </label>
              <input
                type="text"
                value={state.contacts.github}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACTS",
                    payload: { github: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="daniil-petrov"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={state.contacts.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACTS",
                    payload: { email: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Telegram (@username или ссылка)
              </label>
              <input
                type="text"
                value={state.contacts.telegram}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACTS",
                    payload: { telegram: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="@daniil"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                LinkedIn (username или URL)
              </label>
              <input
                type="text"
                value={state.contacts.linkedin}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACTS",
                    payload: { linkedin: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="in/daniil-petrov"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Portfolio / Сайт
              </label>
              <input
                type="url"
                value={state.contacts.website}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACTS",
                    payload: { website: e.target.value },
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
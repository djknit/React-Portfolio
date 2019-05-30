import React from 'react';

function projectCard({
  name,
  description,
  myRole,
  techUsed,
  note,
  links
}) {

  return (
    <div class="col-xl-6">
      <div class="project card">
        <div class="card-header">
          <h3>{name}</h3>
        </div>
        <div class="card-body">
          <img src="assets/images/book_search.png" alt="Book Search screenshot" />
        </div>
        <div class="card-body">
          {description}
        </div>
        <div class="card-body">
          <h6>My Role</h6>
          {myRole}
        </div>
        <div class="card-body">
          <h6>Technologies Used</h6>
          {(techUsed.front || techUsed.back || techUsed.api) ||
            <div className="row">
              <div className="col-6">
                {techUsed.front &&
                  <>
                    <label>Front End</label>
                  </>
                }
                {techUsed.api &&
                  <>
                    {techUsed.front && <br />}
                    <label>Public APIs</label>
                  </>
                }
              </div>
              <div className="col-6">
                {techUsed.back &&
                  <>
                    <label>Back End</label>
                  </>
                }
                {techUsed.general &&
                  <>
                    {techUsed.back && <br />}
                    <label>Other</label>
                  </>
                }
              </div>
            </div>
          }
        </div>
        {note &&
          <div class="card-body">
            <h6>Note</h6>
            {note}
          </div>
        }
        <div class="card-footer">
          <div class="btn-group" role="group" aria-label="links">
            <a href={links.repo} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <span>Repository</span>
            </a>
            <a href={links.deployed || links.video} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <span>
                {links.deployed ?
                  <>
                    Deployed<br />Page
                  </> :
                  <>
                    Demo<br />Video
                  </>
                }
              </span>
            </a>
            <a href={links.readme} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <span>Readme</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectCard;